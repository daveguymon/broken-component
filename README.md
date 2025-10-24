# Mid-Level JavaScript/React Problem Solving

## 🎯 Exercise Goal

The primary goal of this exercise is not just to fix bugs, but to demonstrate your process for **identifying faults**, **analyzing code quality**, and **implementing modern, maintainable JavaScript/React practices**.

This scenario simulates a real-world task where you inherit a piece of poorly-written and broken legacy code that needs to be brought up to production standards.

## 📁 Files Provided

You have been provided with two files:

1.  **`apiService.js`**: This simulates a simple Node.js/Express backend service by returning a Promise. **It contains intentional bugs**, specifically related to error handling and data consistency.

2.  **`BuggyProjectList.jsx`**: This is a React functional component that attempts to consume the `fetchProjects` function from the service file. **It contains several major anti-patterns and bugs**, including issues related to `useEffect`, state management, and data access.

## ✅ Your Tasks

Please approach this exercise in three phases. Focus on communicating your thoughts and decisions out loud throughout the process.

### Phase 1: Debugging (Focus on Functionality)

1.  **Identify all bugs** in both `apiService.js` and `BuggyProjectList.jsx`.

2.  **Fix the bugs** to ensure the component runs correctly, fetches data reliably, and properly handles both successful responses and error states.

3.  Ensure the component correctly applies the `filterTerm` prop.

### Phase 2: Refactoring (Focus on Maintainability and Standards)

Once the component is functional, refactor the code to improve quality and adherence to modern best practices:

1.  **Extract Logic into a Custom Hook**: The data fetching, loading state, and error handling logic within `BuggyProjectList` is too complex for a presentational component. Extract this logic into a clean, reusable custom hook (e.g., `useProjectsData(filterTerm)`).

2.  **Robust State Management**: Ensure the component clearly handles and displays the four possible states: **Loading**, **Success** (with data), **Error**, and **Empty** (no results after filtering).

### Phase 3: Discussion

Be prepared to discuss your refactored code and architectural choices, including:

* The reasoning behind your custom hook implementation.

* How you would approach **unit testing** both the custom hook and the component logic.

* Trade-offs you considered (e.g., synchronous vs. asynchronous logic, choosing state management patterns).

## ⏱ Suggested Time Breakdown

This is a flexible guideline for our 60-minute session:

| Duration | Activity |
| :--- | :--- |
| **5 min** | Review the files and ask clarifying questions. |
| **20 min** | **Phase 1: Debugging and Initial Fixes** |
| **30 min** | **Phase 2: Refactoring into a Custom Hook** |
| **5 min** | **Phase 3: Review and Discussion** |
