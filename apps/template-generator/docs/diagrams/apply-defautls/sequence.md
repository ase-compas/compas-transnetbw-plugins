```mermaid
sequenceDiagram
    actor Alice
    participant DTService
    participant Repo
    participant DefaultService


    Alice ->> DTService: setDefault(kind, id)
    activate DTService

    DTService ->>  Repo: getTypeById(kind, id)
    Repo -->> DTService: root data type

    DTService ->>  Repo: getReferencedTypes(kind, id)
    Repo -->> DTService: set of referenced types


    DTService ->> DefaultService: setDefault(kind, instance, types)
    DefaultService -->> DTService: ok
    deactivate DTService

    Alice ->> DTService: applyDefault(kind, id, name)
    activate DTService

    DTService ->>  Repo: getTypeById(kind, id)
    Repo -->> DTService: root data type
    
    DTService ->> DTService: getTypeDetails(kind, id) to know required type and instance for name
    
    DTService ->>  DefaultService: getDefault(kind, instance)
    DefaultService -->> DTService: default instance or undefined if not set
    deactivate DTService
```

Apply Defaults Collision Detection Pseudocode 

```pseudocode
function applyDefault(kind, id, name):
    type = Repo.getTypeById(kind, id)
    if type is null:
        throw Error("Type not found")

    defaults = getTypeDefaults(kind, instnace)
    if defaults is null:
        return undefined
    
    for every default d:
       if exists type with id d.id:
          handle_id_collision(d, type)
          
    return defaultInstance[name]
```

