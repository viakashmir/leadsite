// A real bcrypt hash of a throwaway string. Login compares against it when the
// email is unknown, so both paths cost one bcrypt and response timing doesn't
// reveal which emails have accounts.
export const DUMMY_PASSWORD_HASH = "$2b$10$n1MhMdO3nWXzJ96vyeEiE.1pl5J4hIgVgLOJnV0STSxiZa4xw.n62";
