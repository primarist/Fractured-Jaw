

file="Path/To/Your/Questions File.txt"
size=$(wc -l < $file)
line=$((1 + $RANDOM % $size))
echo $(sed -n "$line"p < $file)
