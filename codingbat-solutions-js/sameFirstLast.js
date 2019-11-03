function sameFirstLast(nums) {
    if (nums.length - 1 >= 0) {
        if (nums[0] === nums[nums.length - 1]) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}