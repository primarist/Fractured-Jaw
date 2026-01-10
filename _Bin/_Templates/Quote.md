<%*
async function quote(tp, doc) {
    let url = 'https://www.brainyquote.com/quote_of_the_day';

    if (doc === undefined) {
        let page = await tp.obsidian.request(url);
        let p = new DOMParser();
        doc = p.parseFromString(page, "text/html");
    }

    // Alias for querySelector
    let $ = (s) => doc.querySelector(s);

    const author = $(".qotd-wrapper-cntr div .bq-aut")?.textContent?.trim() || "author";
    const quot = $(".qotd-wrapper-cntr div a div")?.textContent?.trim() || "quote";

    return `
> ${quot}
> — <cite>${author}</cite>
    `;
}
quote()
%>