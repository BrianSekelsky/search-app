Brian Sekelsky
Tempus Applicant
Submitted: 11/14/18

I decided to use Reactjs in-order to demonstrate my knowledge of and get some more practice in the library

The searches from the Open Trials API were already objects so I thought I should just store them in an array
inside the App's state. If I were to re-do this I think making a component for these objects would be better.
I could store public_title, status, age_range, etc as props for that component.

Then I separated the UI into a search bar and a list.

Search uses axios to perform the Https GET requests.

The list is a collection of ListItems.

ListItems is a component which formats all the necessary data from each search result.

There is also a "Download Report of Selected Trials" button which creates a pdf of the public_titles from
all the selected results.

If I could offer some more time to this project I would go back and create a component for storing the search results. This would greatly simplify the process of exporting the pdf.