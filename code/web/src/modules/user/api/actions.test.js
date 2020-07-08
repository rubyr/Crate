import * as userAction from "./actions";

describe('User Actions', () => {
  describe('setUser', () => {
    it('should return a set_user action with an empty user object', () => {
      const value = userAction.setUser(undefined, {});
      const expectedValue = {
        type: "AUTH/SET_USER",
        user: {}
      }
      expect(value).toStrictEqual(expectedValue);
    })

    it('should return a set_user action with the user object', () => {
      const user = {
        name: "john doe",
        email: "whocares@thisisfake.no",
        role: "user",
        id: 1
      }
      const value = userAction.setUser(undefined, user);
      const expectedValue = { type: "AUTH/SET_USER", user };
      expect(value).toStrictEqual(expectedValue);
    })
  })
  
})
