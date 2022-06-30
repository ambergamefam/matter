"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||i;return n?o.createElement(u,r(r({ref:t},p),{},{components:n})):o.createElement(u,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={},r="Replication",l={unversionedId:"Guides/Replication",id:"Guides/Replication",title:"Replication",description:"Replication is not built into Matter, but it's easy to implement yourself. This guide will give you an overview of one way to implement replication wit Matter.",source:"@site/docs/Guides/Replication.md",sourceDirName:"Guides",slug:"/Guides/Replication",permalink:"/matter/docs/Guides/Replication",draft:!1,editUrl:"https://github.com/evaera/matter/edit/main/docs/Guides/Replication.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Matter Debugger",permalink:"/matter/docs/Guides/MatterDebugger"}},s={},c=[{value:"Deciding which components to replicate",id:"deciding-which-components-to-replicate",level:2},{value:"Creating the replication system",id:"creating-the-replication-system",level:2},{value:"Replicating changes to the clients",id:"replicating-changes-to-the-clients",level:2},{value:"Replicating the existing world to new players",id:"replicating-the-existing-world-to-new-players",level:2},{value:"Receiving replication on the client",id:"receiving-replication-on-the-client",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"replication"},"Replication"),(0,a.kt)("p",null,"Replication is not built into Matter, but it's easy to implement yourself. This guide will give you an overview of one way to implement replication wit Matter."),(0,a.kt)("p",null,"This article will cover the way the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/evaera/matter/blob/main/example/shared/start.lua"},"Matter example game")," implements replication."),(0,a.kt)("h2",{id:"deciding-which-components-to-replicate"},"Deciding which components to replicate"),(0,a.kt)("p",null,"You need to decide which components are replicated and which are not. You probably don't want to replicate every component, because some components might have data that's only relevant to the server or data that is updated too frequently to comfortably replicate each time it changes."),(0,a.kt)("p",null,"In this example, we'll just define a list of component names we want to replicate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local REPLICATED_COMPONENTS = {\n    "Roomba",\n    "Model",\n    "Health",\n    "Target",\n    "Mothership",\n    "Spinner",\n}\n')),(0,a.kt)("h2",{id:"creating-the-replication-system"},"Creating the replication system"),(0,a.kt)("p",null,"Create a new system called ",(0,a.kt)("inlineCode",{parentName:"p"},"replication")," on the server. Put the list of replicated components at the top of the file."),(0,a.kt)("p",null,"We'll create a remote event while we're at it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local ReplicatedStorage = game:GetService("ReplicatedStorage")\n\nlocal RemoteEvent = Instance.new("RemoteEvent")\nRemoteEvent.Name = "MatterRemote"\nRemoteEvent.Parent = ReplicatedStorage\n')),(0,a.kt)("p",null,"Let's convert the list of component names into actual components. This is assuming you have a Components module that exports your components, like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/evaera/matter/blob/main/example/shared/components.lua"},"the matter example game does"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local replicatedComponents = {}\n\nfor _, name in REPLICATED_COMPONENTS do\n    replicatedComponents[Components[name]] = true\nend\n")),(0,a.kt)("p",null,"Let's create an empty function for our system and set up the rest of the system before we really get going."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local function replication(world)\n -- todo!\nend\n\nreturn {\n    system = replication,\n    priority = math.huge,\n}\n")),(0,a.kt)("p",null,"We set the system ",(0,a.kt)("inlineCode",{parentName:"p"},"priority")," to infinity so that it always runs last, at the end of the frame."),(0,a.kt)("h2",{id:"replicating-changes-to-the-clients"},"Replicating changes to the clients"),(0,a.kt)("p",null,"We can use ",(0,a.kt)("a",{parentName:"p",href:"/api/World#queryChanged"},"World:queryChanged")," to detect when a component changes and replicate it to all players in the game."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- In the replication function we created above.\n\n-- Create a table to buffer up our changes so we only send out at most one remote event per frame\nlocal changes = {}\n\n-- Loop over our table of replicated components\nfor component in replicatedComponents do\n    -- Loop over queryChanged for this component\n    for entityId, record in world:queryChanged(component) do\n        -- We convert the entity ID to a string because tables sent over remote events in Roblox\n        -- can only have string keys. (did I just teach you something new?)\n        local key = tostring(entityId)\n\n        -- Get the name of the component. This is done with tostring as well because components have\n        -- a custom __tostring metamethod that returns their human-readable name.\n        local name = tostring(component)\n\n        -- If there aren't any changes from this entity in the buffer so far, create the table for it\n        if changes[key] == nil then\n            changes[key] = {}\n        end\n\n        -- Only send over the changed component if the entity still exists in our world.\n        if world:contains(entityId) then\n            -- Lua tables can't contain nil as values, this is indistinguishable from the key just\n            -- not existing at all.\n            -- Instead, we set all values to a table, and then create a key inside that for the real\n            -- value. This lets us detect when a component is removed (set to nil)\n            changes[key][name] = { data = record.new }\n        end\n    end\n\n    -- Check if there are any changes in our buffer before sending the changes to all clients.\n    if next(changes) then\n        RemoteEvent:FireAllClients(changes)\n    end\nend\n")),(0,a.kt)("p",null,"This works pretty well! Only one problem. What if a player joins late when the world is already created?"),(0,a.kt)("h2",{id:"replicating-the-existing-world-to-new-players"},"Replicating the existing world to new players"),(0,a.kt)("p",null,"We can augment the system we created above with some special code to handle sending the entire World to new players who join the game late."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- Also inside our replication function\n\n-- Run some code every time a player joins\nfor _, player in useEvent(Players, \"PlayerAdded\") do\n    local payload = {}\n\n    -- Loop over the entire World using the world's __iter metamethod implementation\n    for entityId, entityData in world do\n        local entityPayload = {}\n\n        -- Loop over all the components the entity has\n        for component, componentData in entityData do\n            -- Only if it's in our list of replicated components...\n            if replicatedComponents[component] then\n                -- Add it to the data we're sending for this entity\n                entityPayload[tostring(component)] = { data = componentData }\n            end\n        end\n\n        -- Add the entity data to our overall payload\n        payload[tostring(entityId)] = entityPayload\n    end\n\n    RemoteEvent:FireClient(player, payload)\nend\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"payload")," object is structured the exact same way as our ",(0,a.kt)("inlineCode",{parentName:"p"},"changes")," object from earlier, so we only need to write one piece of code on the client to handle both of these cases."),(0,a.kt)("h2",{id:"receiving-replication-on-the-client"},"Receiving replication on the client"),(0,a.kt)("p",null,"The code on the client is not a system in our ECS, since it's just attaching an event listener to a Remote Event."),(0,a.kt)("p",null,"We can put this code in the same file where we create our World, so we have a reference to it already."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local ReplicatedStorage = game:GetService(\"ReplicatedStorage\")\nlocal Components = require(ReplicatedStorage.Game.components) -- example\n\n-- Get our remote event that we created on the server\nlocal RemoteEvent = ReplicatedStorage:WaitForChild(\"MatterRemote\")\n\n-- A lookup table from server entity IDs to client entity IDs. They're different!\nlocal entityIdMap = {}\n\nRemoteEvent.OnClientEvent:Connect(function(entities)\n    -- entities is the data sent from the server. Either the `payload` or `changes` from earlier!\n\n    -- Loop over the entities the server is replicating\n    for serverEntityId, componentMap in entities do\n        -- Check if we've created this entity on the client before\n        local clientEntityId = entityIdMap[serverEntityId]\n\n        -- If we've created this entity before, and there are no components inside its list, that means\n        -- the entity was despawned on the server. We despawn it here too.\n        if clientEntityId and next(componentMap) == nil then\n            world:despawn(clientEntityId)\n\n            -- Remove it from our lookup table\n            entityIdMap[serverEntityId] = nil\n            continue\n        end\n\n        local componentsToInsert = {}\n        local componentsToRemove = {}\n\n        -- Loop over all the components in the entity\n        for name, container in componentMap do\n            -- If container.data exists, the component was either changed or added.\n            if container.data then\n                table.insert(componentsToInsert, Components[name](container.data))\n            else -- if it doesn't exist, it was removed!\n                table.insert(componentsToRemove, Components[name])\n            end\n        end\n\n        -- We haven't created this entity on the client before. create it.\n        if clientEntityId == nil then\n            clientEntityId = world:spawn(unpack(componentsToInsert))\n\n            -- add the client-side entity id to our lookup table\n            entityIdMap[serverEntityId] = clientEntityId\n        else -- we've seen this entity before.\n\n            -- Just insert or remove any necessary components.\n\n            if #componentsToInsert > 0 then\n                world:insert(clientEntityId, unpack(componentsToInsert))\n            end\n\n            if #componentsToRemove > 0 then\n                world:remove(clientEntityId, unpack(componentsToRemove))\n            end\n\n        end\n    end\nend)\n")),(0,a.kt)("p",null,"And that's all there is to it! You could make this system more advanced in a lot of different ways, but this should get you started with a basic replication system for your game."))}d.isMDXComponent=!0}}]);