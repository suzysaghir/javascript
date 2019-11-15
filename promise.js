const report = {
  user1: 0,
  user2: 10,
  user3: 100
};

const executorFunction = (resolve, reject) => {
  if (report.user1 > 0) {
      resolve('user login');
  } else {
      reject(' user is not available  '); 
  }
}


const prom = () => {
    return new Promise(executorFunction);
};

const user_report = prom();

console.log(user_report); // reject error: user is not available  


