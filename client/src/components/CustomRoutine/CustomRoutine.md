This code is part of two React components: CustomRoutine and an unnamed component that renders an ExerciseEle and an "Add" button.

The unnamed component: This component takes three props: name, gif, and reps. It renders an ExerciseEle component with these props and a button. When the button is clicked, it navigates to the /customroutine route.

CustomRoutine: This component fetches a list of exercises from an API and stores it in the data state. It also has a type state that's initially set to 'all'. The useEffect hook is used to fetch the data when the component mounts. The filteredData constant is then calculated based on the type state. If type is 'all', filteredData is the same as data. Otherwise, filteredData is a filtered version of data that only includes exercises where item.target is equal to type.
