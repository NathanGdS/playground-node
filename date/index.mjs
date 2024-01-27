import assert from "assert";

const date = new Date("2022-01-25 00:00");

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

{
  const actual = date.toLocaleDateString("pt-br", options);
  const expected = "25 de janeiro de 2022";
  assert.strictEqual(actual, expected);
}
{
  const actual = date.toLocaleDateString("pt-br", {
    ...options,
    month: "numeric",
  });
  const expected = "25/01/2022";
  assert.strictEqual(actual, expected);
}

{
  const actual = new Intl.DateTimeFormat("pt-br").format(date);
  const expected = "25/01/2022";
  assert.strictEqual(actual, expected);
}

{
  const actual = new Intl.DateTimeFormat("pt-br", {
    dateStyle: "full",
  }).format(date);
  const expected = "terça-feira, 25 de janeiro de 2022";
  assert.strictEqual(actual, expected);
}

{
  const actual = new Intl.DateTimeFormat("pt-br")
    .format(date)
    .replaceAll("/", "-");
  const expected = "25-01-2022";
  assert.strictEqual(actual, expected);
}
