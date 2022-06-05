const USER = 'USER_LOCAL_STORAGE'

export const user = {
   set: (userInfo) => {
      localStorage.setItem(USER, JSON.stringify(userInfo))
   },
   get: () => {
      return JSON.parse(localStorage.getItem(USER))
   },
   remove: () => {
      localStorage.removeItem(USER)
   },
   isAuthorized: () => {
      const us = user.get()

      return us && us.id
   }
}