

# Frontend

Frontend should ask questions based on DTree, and then onAction send a JSON { 'UserResults' : '[a,b,c]' } to the backend

## Backend

Backend pics up { 'UserResults' : '[a,b,c]' }, gets the list [a,b,c] and uses this in combination
with decisiontreedata, which is also a JSON which is turned into the two lists to be used. Returns JSON with
{ 'Class' : 'Classification' }

## DecisionTreeData

To be formatted this way

{ 'testDataList' : '[[a,b,c],[a,b,c]]',
  'testDataResults' : '[result1,result2]
}


## Decision Tree

Logical? - Maths? or Art?
Maths? - Programming? or Binary?
Art? - Graphics? or UI/UX?

                   Logical?
                /            \
            Maths?            Art?
           /      \         /       \
        Prog?   Binary?   Graphics? UI/UX?









