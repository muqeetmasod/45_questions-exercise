/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

*/

//invitation
let dinnerinvite: string[] = ["ali", "ahmed", "zaid"];

for (let x = 0; x < dinnerinvite.length; x++) {
  console.log(`Mr ${dinnerinvite[x]}! you are invited to dinner at my place`);
}

//changing guest list

console.log("zaid! cant make it to dinner\n");
console.log("new invitation list:");
dinnerinvite.splice(2, 1, "hassan");
for (let x = 0; x < dinnerinvite.length; x++) {
  console.log(dinnerinvite[x]);
}
