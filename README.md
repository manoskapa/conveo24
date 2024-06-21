
Components are the building blocks of any React application. They represent reusable pieces of the UI that can be independent or dependent on other components.
In my react-app i have 3 components.
1)the ElementCard who is responsible for how the card will be displayed on the screen .
This card includes an image, title, year, and a button linking to more detailed information about that element.(The button does not work because the api had some issue sending the details)
2)Navigation facilitates page transitions without reloading, preserving the single-page application behavior. It renders a navigation bar styled in dark color, featuring links to Home and Search. These links route to the Home and SearchPage components respectively.
3)SearchComponent is handling user input to search for data.
It uses the useState hook to manage the state of the user's search query. The state variable holds the text input by the user, which is updated via the setQuery function.

The handleInputChange function is triggered whenever the user types into the input field. It updates the query state with the user input, ensuring the component knows the current search term.

When the form is submitted through the handleSearch function (triggered on the form's submit event), it prevents the default form submission behavior (which would reload the page) using e.preventDefault(). It then calls the onSearch function, passing the current query as an argument. This onSearch function is expected to be passed as a prop from the parent component, allowing the search functionality to be executed from a parent component's context.

The component also renders a form with a Bootstrap styled input group. This includes:

A text input where users can type their search query.
A button that triggers the form submission, labeled Search, styled with Bootstrap to be black for visual consistency.



Pages in React are typically represented as components, but they act as the broader container that might contain various components to form a complete screen.
in my react-app i have 3 pages and 2.css files for customizing 1 for the Home and one for the SearchPage.

1)Home, is designed to serve as a homepage for a web application. 

Home.css is imported to apply specific styles to this component.
MyImage is imported from the assets directory, which holds an image file named cinemapic.avif. This image will be used as a key visual element on the page.
Component Structure:

The Home function component returns a structure that defines the visual layout for the home page.
There is a parent div with a class image-banner, which incorporating an image and additional styling.
Image Display:

Within the image-banner div, an img tag is used to display the image imported as MyImage. This image has the class img-fluid applied, which is a Bootstrap class that makes the image responsive, adjusting its width and height proportionally to fit the width of its container.

A div with the class text-overlay contains a paragraph that welcomes users to the movie search application and prompts them to use a search feature. 


The component doesn't contain any interactive logic or state management. It focuses on presenting the image and text. The visual aspects, such as the positioning of the text over the image and the responsiveness of the image, are managed by the associated CSS styles in Home.css .
2)SearchPage encapsulates the functionality for a search interface where users can find movies. 

useState are imported for creating the component with state management.
SearchComponent provides the user input interface for searching.
searchMovies is imported from apiService and used to fetch search results based on a query.
SearchPage.css for styling the search page.

elements is an array used to store the search results.
error is a state for tracking errors during the data fetching process.
message holds messages to be displayed to the user, such as "No results found".

handleSearch is an asynchronous function triggered when a search is performed. It attempts to fetch data using searchMovies. If no results are found, it sets a message indicating this, and clears previous results.
If an error occurs during the fetch, it logs the error and sets the error state to display the error message.

Displays a header (h1) for the page titled "Search Movies".
Renders the SearchComponent, passing handleSearch as a prop to handle the search action.
Conditionally displays an error message if there is any error during the search process.
Maps over the elements array to render an ElementCard for each element (movie). This card displays details about the movie 

An error message is displayed if there is any error fetching data.
A user-friendly message is displayed if no search results are found.
3)Display was supposed to encapsulate the functionality of displaying the movie details when the user clicks the button More info but that unfortunately didn't happen because the api i used had a error preventing me from fetching the movie details to display to the user.


 



Services is used to handle external interactions with API it abstract the logic needed to communicate with a server, handle data processing.
1)apiService defines two functions, searchMovies and getMovieDetails, as  an API service using axios for HTTP requests. Both functions are designed to interact with an external movie database API, the OMDb API on RapidAPI. Here's what each function does:

searchMovies(query)
Searches for movies based on a user's query string.
uses query a string that the user inputs to search for movies.
it sends a GET request to the OMDb API's search endpoint.
Includes the parameter s, which specifies the search string ,movie title, the API should look for.
Sets the necessary headers for the request, including the content type and the required API key and host.
it returns the search results under the .Search key from the response data, which contains an array of movies that match the query.
it logs any errors to the console and rethrows them to be handled by the calling code.

getMovieDetails(id)
it fetches detailed information about a specific movie by its IMDb ID.
Parameters:
id: A predefined IMDb ID (tt0372784) is used in this function.Unfortunately the api responds with Errors so i cant fetch the MovieDetails.

Finally the App.js:
App, serves as the main entry point of a React application that utilizes react-router-dom for managing routing. It sets up the basic structure of the application, including navigation and routing to different pages.

It Imports
BrowserRouter: Routes, Route, Link: Components from react-router-dom that enable Single Page Application routing within React. BrowserRouter listens to the URL changes and manages routing, Routes is a container for Route components, and each Route maps a path to a React component.
Imports the Bootstrap CSS for global styling.
Home, SearchPage, Navigation, Details Imports represent different parts of the application.
App Component:
The Router component wraps the entire application to provide routing capabilities. This component listens to the browser's URL and makes changes to your app's UI based on the URL path.

Navigation Component:

Rendered at the top and included outside of the Routes. This allows the Navigation to be visible on all pages, providing consistent navigation links across the site.
Routes and Route Components:

Routes acts as a wrapper for Route components, managing which components should be rendered based on the URL path.
Route components define the mapping between the path and the component that should render for that path.
path="/": This is the root of the site, mapped to the Home component.
path="/search": Maps to the SearchPage component, where users can search for items or information.
path="/details/:id": A dynamic route that maps to the Details component. The :id is a route parameter that allows the Details component to fetch and display information based on the specific ID provided in the URL.
Functionality:
The App component sets up the entire page structure with navigation and routing, allowing users to navigate between the Home, SearchPage, pages without reloading the page. This setup enhances user experience by providing smooth transitions and preserving application state.

