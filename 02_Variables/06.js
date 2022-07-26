// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/*
This program will not produce an error and will log 'bar'.
FOO is a constant and cannot be reassigned, but the reassignment in this case is in block scope.
Therefore, the console.log() cannot see it and will log the initialized value of FOO.
*/