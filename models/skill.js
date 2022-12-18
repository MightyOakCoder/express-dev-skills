const skills = [
    { id: 123, skill: "HTML", done: true },
    { id: 456, skill: "CSS", done: true },
    { id: 789, skill: "JavaScript", done: true },
    { id: 124, skill: "Node", done: true },
    { id: 125, skill: "Express", done: true },
    { id: 112, skill: "MongoDB", done: true },
    { id: 154, skill: "Mongoose", done: true },
    { id: 124, skill: "Python", done: false },
];

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function update(id, skill) {
    console.log(id, skill)
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skill.id = parseInt(id)
    console.log(skill)
    skills.splice(idx, 1, skill)
}