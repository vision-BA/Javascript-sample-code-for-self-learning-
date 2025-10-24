const myName={fName:"bright",lName:"Athuman",
fullName:function(){
  return this.fName + " "+this.lName;
}
//underatnd that fullName also a property of myName object as function
};
console.log(myName.fullName());