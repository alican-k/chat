# chat

Some libraries used in this React Native project:
  - redux
  - redux-observable (and rxjs)
  - react-navigation
  - ramda and recompose which are two of my favourite libraries, however I didn't need them much in this project.
  
## Styles

For styles, I like to follow some principles. Some of them are described in this blog post:  
https://thoughtbot.com/blog/structure-for-styling-in-react-native

 - I tried to get atomic by defining colors, fonts and similar.. But this is a small project so I didn't try 
 to overuse this principle.
 - They are easy to find (shouldn't import each of them from seperately )
 - After defining reusable parts, we still need to write styles for most of the components. These are writen in the same 
 file with the component since they are close to the component.
 - My favorite one: Components shouldn't decide (if possible) their position(margins, alignSelf etc..) in the layout. This 
 make them more reusable in terms of using them in different parts of the screen.
 
## Store and side effects

Since this is a small project, actions, reducer(there is one reducer and there is no reducer combination) and epics are held
in same folder, named ``store``

``redux-observable`` is used for redux middleware and side effects are held in ``services`` folder. Services are wrapped 
with observables when necessary. (This means; when they will be needed to be part of an observable chain, it is better to wrap 
them with an observable)

I am experienced with firebase but Async Storage is used for simplicity (checked by Şahin) as a service(NicknameService) as well as 
ChatService.

## Components

When it comes to organizing the folder and file structure of components, every one has different preferences. Personally, 
I don't find it usefull to put them to the seperate folders such as screens, containers, presentationals etc. There is a 
seperation between them and they exist but I think there is no need to group them in seperate folders. 

Hierarchy of the folders should be similar to the structure of the elements that you see on the screen. That is easy 
to follow and find. When a component is used in common, it can be put inside the same level of the components it is used in common. 

Another point is that components are pure with the exception of controlled components (or containers of controlled components).

Finally, I am a little obsessive about writing components that are no longer then 40 lines of code. This is the most simple best 
practice to follow with the biggest positive effect. Similar to 80/20 rule :)

I hope the explanations are short and enough.

Thanks!
