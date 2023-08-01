function isAdult(user) {
    return user.age >= 18;
}
var justine = {
    name: 'Justine',
    age: 25,
};
var isJustineAnAdult = isAdult(justine);
console.log("isJustineAnAdult: ", isJustineAnAdult);
