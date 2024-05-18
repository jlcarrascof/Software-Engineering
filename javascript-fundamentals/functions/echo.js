function echo(string) {
    // your code here...
    let buildStr = string.toUpperCase() + " ... " + string + " ... " + string.toLowerCase();
    return console.log(buildStr);
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
