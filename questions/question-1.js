// QUESTION
// Given you have two arrays of the same length, how would you
// merge these arrays together, taken into account some values could be null within the array
// and owners can have multiple cars, how would you display and handle that?

const owners = ["lana", "steve", "ada", null, "bob", "ada", "ada"];
const cars = ["lexus", "honda", "toyota", "ford", "nissan", "ferrari", "mazda"];

// ANSWER

const uniqueArray = (arr) => [...new Set(arr)];

const doesOwnerHaveCars = (mergedObject, owner) => {
  const currentOwnersWithSameCar =
    Object.entries(mergedObject)
      .filter(([, value]) => value.owner === owner && !!value.cars)
      .map(([, value]) => value.cars)
      .flat() || [];

  return uniqueArray(currentOwnersWithSameCar);
};

const mergedTwoArrays = (listA, listB) =>
  !!listA &&
  !!listB &&
  listA.reduce(
    (acc, itemA, index) => [
      ...acc,
      {
        owner: itemA,
        ...(!!listB[index] && {
          cars: [...doesOwnerHaveCars(acc, itemA), listB[index]],
        }),
      },
    ],
    []
  );

const mergedList = mergedTwoArrays(owners, cars);

console.log(JSON.stringify(mergedList, null, 2));
