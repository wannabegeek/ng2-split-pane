# ng2-split-pane

[![npm version](https://badge.fury.io/js/ng2-split-pane.svg)](https://www.npmjs.com/package/ng2-split-panehttps://badge.fury.io/js/ng2-split-pane.sv://plnkr.co/bxgcK29PNl9lexw6z6Ym)

Split View module for Angular 2

See an example on [plnkr here](https://plnkr.co/bxgcK29PNl9lexw6z6Ym)

I should be pretty easy to use (hopefully), you can ether have a `horizontal-split-pane` or a `vertical-split-pane`

These can take 3 optional configuration values;

|Key                           | Does                                                                                                     |
|------------------------------|----------------------------------------------------------------------------------------------------------|
|`primary-component-minsize`   | Only allow the primary pane (either top or left) to go as small as this                                  |
|`secondary-component-minsize` | Only allow the secondary pane (either bottom or right) to go as small as this                            |
|`local-storage-key`           | If this value is present, uses this key withing localstorage to remember the position of the divider bar |

```javascript
<horizontal-split-pane primary-component-minsize="50" secondary-component-minsize="100" local-storage-key="split-pane">
    <div class="split-pane-content-primary">
        <div class="upper">
            Upper pane
        </div>
    </div>
    <div class="split-pane-content-secondary">
        <div class="lower">
            Lower pane
        </div>
    </div>
</horizontal-split-pane>

```
