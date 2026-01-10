<%*
let depth = await tp.system.prompt("Enter row header depth (e.g. 2 for ##, default 2):");
if (!depth) depth = 2;

// Ensure depth is a number
depth = parseInt(depth);

tR = `\`\`\`dataviewjs
let START_MARKER;

(async () => {
    const ROW_HEADER_DEPTH = ${depth};
    const PARENT_DEPTH = ROW_HEADER_DEPTH - 1;

    console.log("Target Row Depth: " + ROW_HEADER_DEPTH);

    const filePath = dv.current().file.path;
    const file = app.vault.getAbstractFileByPath(filePath);
    if (!file) {
        dv.paragraph("Could not read file.");
        return;
    }

    const md = await app.vault.read(file);
    const lines = md.split("\\n");
    console.log("Total lines in file: " + lines.length);

    let scriptStart = -1;
    let scriptEnd = -1;
    const startMarker = "let " + "START_MARKER;";
    const endMarker = "let " + "END_MARKER;";

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(startMarker)) {
            scriptStart = i - 1;
            for (let k = i; k < lines.length; k++) {
                if (lines[k].includes(endMarker)) {
                    scriptEnd = k + 1;
                    break;
                }
            }
            break;
        }
    }

    console.log("Script Block: Lines " + scriptStart + " to " + scriptEnd);

    function insideScript(i) {
        return scriptStart !== -1 && scriptEnd !== -1 && i >= scriptStart && i <= scriptEnd;
    }

    function getHeaderDepth(line) {
        const match = line.match(/^(#+)\\s+(.*)$/);
        if (!match) return null;
        return { depth: match[1].length, text: match[2].trim() };
    }

    let startLine = 0;
    let parentHeader = "";

    if (scriptStart !== -1 && PARENT_DEPTH > 0) {
        console.log("Searching backwards for Parent Header (Depth " + PARENT_DEPTH + ")...");
        for (let i = scriptStart - 1; i >= 0; i--) {
            const h = getHeaderDepth(lines[i]);
            if (h && h.depth === PARENT_DEPTH) {
                startLine = i;
                parentHeader = h.text;
                console.log("FOUND START LINE " + i + ": [" + parentHeader + "]");
                break;
            }
        }
    } else {
        console.log("No parent depth defined or script not found. Starting at line 0.");
    }

    let headerStack = [];
    let rows = [];
    let currentRow = null;
    let currentColumn = null;
    let columnTree = {};

    console.log("--- Parsing from line " + startLine + " ---");

    for (let i = startLine; i < lines.length; i++) {
        const line = lines[i];

        if (insideScript(i)) {
            console.log("Skipping line " + i + " (Inside Script)");
            continue;
        }

        const header = getHeaderDepth(line);
        if (header) {
            const { depth, text } = header;

            if (depth <= PARENT_DEPTH && i !== startLine) {
                console.log("STOP CONDITION MET: [" + text + "]. Breaking Loop.");
                break;
            }

            headerStack = headerStack.slice(0, depth - 1);
            headerStack[depth - 1] = text;

            if (depth === PARENT_DEPTH) {
                parentHeader = text;
                console.log("   -> Parent Header updated to: " + parentHeader);
            }

            if (depth === ROW_HEADER_DEPTH) {
                currentRow = { name: text };
                rows.push(currentRow);
                currentColumn = null;
                console.log("   -> New Row Created: " + text);
                continue;
            }

            if (depth > ROW_HEADER_DEPTH) {
                const columnPath = headerStack.slice(ROW_HEADER_DEPTH);
                currentColumn = columnPath.join(" > ");
                console.log("   -> Column Identified: " + currentColumn);

                let subtree = columnTree;
                for (const part of columnPath) {
                    if (!subtree[part]) subtree[part] = {};
                    subtree = subtree[part];
                }

                if (!currentRow[currentColumn]) currentRow[currentColumn] = "";
            }
            continue;
        }

        if (currentRow && currentColumn && line.trim().length > 0) {
            console.log("   -> Appending Data");
            if (currentRow[currentColumn].length > 0) currentRow[currentColumn] += "\\n";
            currentRow[currentColumn] += line;
        }
    }

    function flattenColumns(tree) {
        let result = [];
        for (const key of Object.keys(tree)) {
            result.push(key);
            const children = flattenColumns(tree[key]);
            result.push(...children);
        }
        return result;
    }

    const columns = [parentHeader ?? "Row Values", ...flattenColumns(columnTree)];
    console.log("Final Columns: ", columns);
    console.log("Total Rows collected: " + rows.length);

    const tableRows = rows.map(r =>
        columns.map(c => c === (parentHeader ?? "Row Values") ? r.name : (r[c] ?? ""))
    );

    dv.table(columns, tableRows.map(row =>
        row.map(cell => \`<div style="white-space: normal;">\${cell}</div>\`)
    ));

})();

let END_MARKER;
\`\`\``;
tR;
%>
