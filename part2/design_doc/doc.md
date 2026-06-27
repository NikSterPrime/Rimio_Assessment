# Design for Alternative Activity Suggestion

![image](./alt_act.svg)

This is the doc for the `alternative activity suggestion` in the Itenary design by Aditya Puranik as part 2 of round 1 of interview

Platforms available - PC(across + downward motion) && Phone(downward only motion)

This itenary will accessed majorly on the phone (continous transit of the user during vacation)

## Problem:
TO DESIGN A FLOW FOR THE USER TO GET ALTERNATIVE ACTIVITES AS SUGGESTIONS AND NOT TO BREAK THE CURRENT FLOW WHILE MAINTAINING THE THEME

## Users:
- Extreme explorers - priortise to watch/tour the most when in a new place or on vacation(will be called as 'activities' from now)
- Mild explorers - priortise activites as well making sure they are not fatigued by excess touring. - Family in most cases
- Kickbacks - Will not priortise activites will prefer to stay at accommodation than explore

**We will concentrate on the first two users - as these user base will require the service more**

1. We will first ask the question does the user want to switch ?
- In most cases the user will be curious about a place and cannot possibly know well about a place to consider whether he wants to skip/search alternative.
- We also need to consider the user will be on the move so the data provided should be enough to make a decision

2. What will the user consider before switching an activity with another ?
- In this case we need to consider that the user is not looking to switch but want more info on the acitivity that he is taking part of - maybe how fellow travellers felt orwhat are other popluar places nearby, how walkable it is as well as how long will it take to complete an activity.

3. Why will the user want to switch ?\
- They dont like the time taken for the activity.
- Doesnt like the character of the place they are going.
- Doesnt match with the crowd

## Solution:
A simple solution first is to ensure that the user actually want to switch the activity - thus we have to design in such a way that each activity will fight for why it has to stay on the users iternary.
- The user will select the activity that they are curious about.
- Once they tap or click on it they get a popup in a scroll down format which provides the needed info:
    1. Review (Represented by kite in the diagram) - Rates the overall experience a user goes through, as most of the times users are travelling for new experiences and are will overlook the cost or other factors.
    2. Tips - Already implemented currently by Rimigo.
    3. Opinion of fellow travellers - maybe people from same origin - (this can also create your own inventory).
    4. Popular places to visit which are nearby to the place of interest this will incentivise the user to visit the place before switching to an alternative.
    5. Food places nearby - this allows the users to conviniently choose the activity if a food source is nearby.
[!NOTE]
Points 4 and 5 will affect the overall AI token usage - as this will be needed everytime when an activity is switched.\

The switch activity button will be below the whole thing after scrolling past the above mentioned features - at this point we consider the user has the necessary info of theplace and knows enough to consider whether he wants to switch to an alternate or not.\

We will consider that the user wants to switch to another activity this opens another popup similar to `checkActivity` which recommends three places of certain characteristics:
1. A place which is nearby to the original as the user may be already enroute and checks during this time.
2. A place of opposite character to the recommended place - if beach was suggested maybe hiking area.
3. A place which might be less crowded.
[!NOTE]
These are what I thought and the suggestion criteria can be determined based on user personality determined in the beginning.\
These suggestions will be displayed as cards that on click will give more info like the activity card in the itenary.\
The cards will contain the following:
- Place Name
- Time taken
- Time taken with respect to the activity it is being switched with (eg. If in Singapore - Bungee jumping takes 1hr but a walk in the Garden by the Bay takes 3hrs we show a +2H as well since time could be a major deciding factor).
- Rating of the overall experience should also be added.

This is my solution for designing the displaying the alternative suggestions for an activity in the itenary without breaking the flow or theme.







