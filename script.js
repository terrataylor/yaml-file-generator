$("form").submit(function (evt) {
    evt.preventDefault();
    let input = $("#input").val().trim().replace("	", " ").split("\n").sort();
    var nameList = input.map(function (item) {
        return item.replace("	", " ")
      });
      console.log(nameList)
    console.log(input);
    for (let i = 0; i < nameList.length; i++) {
        let name = nameList[i].split(" ");
        if (name !== "") {
            let firstName = name[0];
            console.log(name,name[1]);
            let lastInitial = name[1].charAt(0).toUpperCase();
            console.log(checkIfDuplicateExists(firstName, nameList))
            if (checkIfDuplicateExists(firstName, nameList)) {
                input[i] = `  - name: ${nameList[i]}\n   shortName: ${firstName}${lastInitial}\n`;
            } else {
                input[i] = `  - name: ${nameList[i]}\n`;
            }
        }
    }

    let stringify = input.toString().replace(/,/g, "");

    $("#output").val(stringify);
})


function checkIfDuplicateExists(firstName, list) {
    let counter = 0;
    if (list) {
        for (let i = 0; i < list.length; i++) {
            let fname = list[i].split(" ")[0];
            if (firstName == fname) {
                counter++;
            }
        }
    }
    return counter > 1;



}