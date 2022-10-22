function foo() {
  return "bar";
}
const foo = function () {
  return "bar";
};

//const sum = 1 + 1;

const difference = 10 - 1;

const add = (parameter1, parameter2) => parameter1 + parameter2;
add(2, 3); //=> 5

const twoAdder = (x) => x + 2;
// is the same as
//const twoAdder = (x) => x + 2;

const sum = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
};
sum(1, 2); //=> 3

const nums = [1, 2, 3];
const squares = nums.map((x) => x ** 2);
squares; //=> [1,4,9]
nums; //=> [1,2,3]

finishedItems = overdueTodoItems.map((item) => (item.className = "complete"));
header.innerText = `You finished ${finishedItems.length} items!`;

lapsedUserAccounts.map((u) => sendBillTo(u.address));
