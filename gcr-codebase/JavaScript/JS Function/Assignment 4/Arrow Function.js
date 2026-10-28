const user = {
    name: "Keshav",

    showName: () => {
        console.log("Arrow function name:", this.name);
    }
};

user.showName();

const correctedUser = {
    name: "Keshav",

    showName: function () {
        console.log("Normal function name:", this.name);
    }
};

correctedUser.showName();
