interface user {
    birthyear: number
}

function calculateAgeOfUser(user: user) {
    return new Date().getFullYear() - user.birthyear;
}

calculateAgeOfUser({
    birthyear: 1990
})