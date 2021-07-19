const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅😁✅ Assertion Passed: ${actual} === + ${expected}`);
  } else {
    console.log(`🛑😔🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
assertEqual("LighthouseLabs", "Bootcamp");
assertEqual(1, 1);
assertEqual("identical string", "identical string");
assertEqual("non-identical string", "identical string");
assertEqual(1, 11);