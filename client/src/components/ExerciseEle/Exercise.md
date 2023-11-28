This code defines two React components: ExerciseDetails and ExerciseEle.

ExerciseDetails is a simple component that receives a video prop and renders a paragraph of text and an iframe with the src set to the video prop.

ExerciseEle is a more complex component that receives several props (name, reps, gif, video, cal) and maintains two pieces of state: isVisible and isStriked.

isVisible is toggled when clickHandler is called, presumably to show or hide some part of the component.
isStriked is toggled and the local storage item 'cal' is updated when onClickHandeler is called. This function seems to be used to strike through an exercise when it's completed and add its calorie count to a total stored in local storage.
