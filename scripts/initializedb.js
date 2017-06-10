let db = new Mongo().getDB("mern");

db.bugs.drop();

db.bugs.insert([
  {status: "Open", priority: "High", owner: "Marco", title: "Bug numero uno"},
  {status: "In Progress", priority: "Low", owner: "Anne Marie", title: "Numba 2"}
]);
