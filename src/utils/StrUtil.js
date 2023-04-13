export default {
    isEmpty(str) {
        return str == null || str == "" || str == "undefined" || str.match(/^[ ]*$/);
    }
}