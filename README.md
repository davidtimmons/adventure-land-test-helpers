adventure-land-test-helpers
===========================

<p>
    <a href="https://www.npmjs.com/package/adventure-land-test-helpers"><img src="https://img.shields.io/npm/v/adventure-land-test-helpers.svg"></a>
    <a href="https://www.npmjs.com/package/adventure-land-test-helpers"><img src="https://img.shields.io/npm/dt/adventure-land-test-helpers.svg"></a>
</p>

[Adventure Land MMORPG](http://adventure.land/) test stubs and mock data for unit testing player
scripts. For a linting tool, see the
[ESLint plugin](https://github.com/davidtimmons/eslint-plugin-adventure-land).

## Installation

```shell
$ npm install adventure-land-test-helpers --save-dev
```

## Usage

All test helpers work with standard JavaScript object access syntax.

```javascript
const AdventureLandTestHelpers = require('adventure-land-test-helpers');
const { mocks, stubs } = AdventureLandTestHelpers;

let monster = mocks.data.MockMonster;
stubs.classic.is_monster(monster); // The "classic" stub will always return true.
```

Alternately, stubs may be injected into the global scope to mimic the game environment.

```javascript
const AdventureLandTestHelpers = require('adventure-land-test-helpers');
const { injectIntoScope, stubs } = AdventureLandTestHelpers;

injectIntoScope(stubs.random, this);
is_monster(); // The "random" stub will return true or false.
```

## API

### Inject into Scope

+ **Path:** `AdventureLandTestHelpers.injectIntoScope`
+ **Description:** Inject functions into the desired scope, useful for creating global stubs.

```javascript
// Inject stubs into the global scope...
const AdventureLandTestHelpers = require('adventure-land-test-helpers');
const { injectIntoScope, stubs } = AdventureLandTestHelpers;
injectIntoScope(stubs.random, this);

// ...then call one of the Adventure Land game functions.
is_monster();
```

### Mock Data

+ **Path:** `AdventureLandTestHelpers.mocks.data`
+ **Description:** Mock game data that can be useful when testing scripts.

| Type      | Path                       |
|-----------|----------------------------|
| Character | `mocks.data.MockCharacter` |
| Circle    | `mocks.data.MockCircle`    |
| ItemStats | `mocks.data.MockItemStats` |
| Line      | `mocks.data.MockLine`      |
| Map       | `mocks.data.MockMap`       |
| Monster   | `mocks.data.MockMonster`   |
| Player    | `mocks.data.MockPlayer`    |
| Socket    | `mocks.data.MockSocket`    |

### Classic Stubs

+ **Path:** `AdventureLandTestHelpers.stubs.classic`
+ **Description:** Stubbed [game runner functions](https://github.com/kaansoral/adventureland/blob/master/runner_functions.js)
  that return the same value every time when called.

| Return Type                | Return Value   |
|----------------------------|----------------|
| *                          | true           |
| Character, Monster, Player | MockCharacter  |
| { string: string }         | { abc: 'xyz' } |
| Boolean                    | true           |
| Character                  | MockCharacter  |
| Circle                     | MockCircle     |
| ItemStats                  | MockItemStats  |
| Line                       | MockLine       |
| Map                        | MockMap        |
| Monster                    | MockMonster    |
| Number                     | 42             |
| Player                     | MockPlayer     |
| Socket                     | MockSocket     |
| undefined                  | undefined      |

### Random Stubs

+ **Path:** `AdventureLandTestHelpers.stubs.classic`
+ **Description:** Stubbed [game runner functions](https://github.com/kaansoral/adventureland/blob/master/runner_functions.js)
  that return a random possible value when called.

| Return Type                | Return Value                                            |
|----------------------------|---------------------------------------------------------|
| *                          | *                                                       |
| Character, Monster, Player | MockCharacter, MockMonster, MockPlayer, null, undefined |
| { string: string }         | { abc: 'xyz' }, null, undefined                         |
| Boolean                    | true, false                                             |
| Character                  | MockCharacter, null, undefined                          |
| Circle                     | MockCircle, null, undefined                             |
| ItemStats                  | MockItemStats, null, undefined                          |
| Line                       | MockLine, null, undefined                               |
| Map                        | MockMap, null, undefined                                |
| Monster                    | MockMonster, null, undefined                            |
| Number                     | [1, 1000]                                               |
| Player                     | MockPlayer, null, undefined                             |
| Socket                     | MockSocket, null, undefined                             |
| undefined                  | undefined                                               |

### Stubbed Functions

+ **Path:** `AdventureLandTestHelpers.stubs.classic`, `AdventureLandTestHelpers.stubs.random`
+ **Description:** Stubbed [game runner functions](https://github.com/kaansoral/adventureland/blob/master/runner_functions.js).

| Function Name | Return Type |
|---------------|-------------|
| accept_party_invite | undefined |
| accept_party_request | undefined |
| activate | undefined |
| add_bottom_button | undefined |
| add_top_button | undefined |
| attack | undefined |
| auto_reload | undefined |
| bank_deposit | undefined |
| bank_store | undefined |
| bank_withdraw | undefined |
| bfs | undefined |
| buy_with_gold | undefined |
| buy_with_shells | undefined |
| buy | undefined |
| can_attack | Boolean |
| can_heal | Boolean |
| can_move_to | Boolean |
| can_use | Boolean |
| change_server | undefined |
| change_target | undefined |
| clear_buttons | undefined |
| clear_drawings | undefined |
| code_draw | undefined |
| command_character | undefined |
| compound | undefined |
| continue_pathfinding | undefined |
| craft | undefined |
| cruise | undefined |
| destroy_item | undefined |
| draw_circle | Circle |
| draw_line | Line |
| equip | undefined |
| eval_s | undefined |
| exchange | undefined |
| game_log | undefined |
| get_active_characters | { string, string } |
| get_map | Map |
| get_nearest_hostile | Character |
| get_nearest_monster | Monster |
| get_player | Player |
| get_socket | Socket |
| get_target_of | Character|Monster|Player |
| get_target | Character|Monster|Player |
| get_targeted_monster | Monster |
| handle_command | undefined |
| handle_death | undefined |
| heal | undefined |
| in_attack_range | Boolean |
| is_character | Boolean |
| is_monster | Boolean |
| is_moving | Boolean |
| is_npc | Boolean |
| is_paused | Boolean |
| is_player | Boolean |
| is_pvp | Boolean |
| is_transporting | Boolean |
| item_grade | Number |
| item_properties | ItemStats |
| item_value | Number |
| load_code | undefined |
| loot | undefined |
| map_key | undefined |
| move | undefined |
| on_cm | undefined |
| on_combined_damage | undefined |
| on_destroy | undefined |
| on_disappear | undefined |
| on_draw | undefined |
| on_game_event | undefined |
| on_party_invite | undefined |
| on_party_request | undefined |
| pause | undefined |
| performance_trick | undefined |
| pget | * |
| plot | undefined |
| pm | undefined |
| preview_item | undefined |
| proxy | undefined |
| pset | undefined |
| qpush | Number |
| quantity | Number |
| reset_mappings | undefined |
| respawn | undefined |
| say | undefined |
| sell | undefined |
| send_cm | undefined |
| send_gold | undefined |
| send_item | undefined |
| send_party_invite | undefined |
| send_party_request | undefined |
| set_button_color | undefined |
| set_button_onclick | undefined |
| set_button_value | undefined |
| set_keymap | undefined |
| set_message | undefined |
| set_skillbar | undefined |
| shift | undefined |
| show_json | undefined |
| smart_move_logic | undefined |
| smart_move | undefined |
| smooth_path | undefined |
| start_character | undefined |
| start_pathfinding | undefined |
| stop_character | undefined |
| stop | undefined |
| swap | undefined |
| trade_buy | undefined |
| trade | undefined |
| transport | undefined |
| trigger_event | undefined |
| unequip | undefined |
| unfriend | undefined |
| unmap_key | undefined |
| upgrade | undefined |
| use_hp_or_mp | undefined |
| use_skill | undefined |
| use | undefined |
| xmove | undefined |

## Sources

1. [Official Adventure Land MMORPG source code](https://github.com/kaansoral/adventureland/blob/master/runner_functions.js)
   by Kaan Soral.
1. [Unofficial Adventure Land MMORPG code documentation](https://nexusnull.github.io/adventureland/global.html)
   by NexusNull.
