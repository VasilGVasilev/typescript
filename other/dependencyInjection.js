class UserService {

  log(message) {
    console.log(message);
  }

  addUser(user) {
    // Add user logic...
    this.log(`User added: ${user}`);
  }
}

// Creating instances and injecting dependencies
// const logger = new Logger(); // Create a Logger instance
const userService = new UserService(); // Inject the Logger instance into UserService

// Usage
userService.addUser("John Doe");