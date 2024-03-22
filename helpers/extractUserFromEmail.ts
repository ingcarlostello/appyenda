export const extracUserNameFromEmail = (email: string) => {
    var parts = email.split("@");
    var userName = parts[0];
    return userName;
};
