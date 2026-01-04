const Header = ({ name }) => {
  return <h2>{name}</h2>
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
};

const Total = ({ parts }) => {
  const totalExc = parts.reduce((s, part) => s + part.exercises, 0)
  return <p><strong>total of {totalExc} exercises</strong></p>
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
};

export default Course