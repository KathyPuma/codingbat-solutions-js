function arrayCount9(nums) {
    let numsStr = nums.toString();
    let string = "";
    for (let i = 0; i < numsStr.length; i++) {
        if (numsStr[i].includes("9")) {
            string += numsStr[i];
        }
    }
    return string.length;
}