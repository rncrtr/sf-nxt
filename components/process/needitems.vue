<template>
    <div class="needitems-container">
        <!--NEEDED ITEMS-->
        <div class="needitems" v-show="showNeedItems">
            <h3>Needed Items:</h3>
            <div class="subtitle italic">Things to have before you start</div>
            <!--NEED ITEM 1-->
            <div class="needitems-item row">
                <div class="col-lg-6">
                    <input type="text" placeholder="Needed Item Title">
                </div>
                <div class="col-lg-3">
                    <div class="select">
                    <select name="needitem-type">
                        <option value="info" selected="selected">info (digital)</option>
                        <option value="mats">material (physical)</option>
                    </select>
                    </div>
                </div>
                <div class="col-lg-3">
                    <input type="text" placeholder="regex format">
                </div>
            </div>
            <!--NEED ITEM 2-->
            <div class="needitems-item row">
                <div class="col-lg-6">
                    <input type="text" placeholder="Needed Item Title">
                </div>
                <div class="col-lg-3">
                    <div class="select">
                    <select name="needitem-type">
                        <option value="info">info (digital)</option>
                        <option value="mats" selected="selected">material (physical)</option>
                    </select>
                    </div>
                </div>
                <div class="col-lg-2">
                    <input type="text" placeholder="Amount: e.g. 5">
                </div>
                <div class="col-lg-1">
                    <input type="text" placeholder="UM: e.g. 2x4 boards">
                </div>
            </div>
            <div class="row needitems-actions">
                <div class="needitems-add col-lg-9">
                    <button class="pri"><md-icon class="md-dark">add</md-icon>&nbsp;Needed Item</button>
                </div>
                <div class="col-lg-3 text-right">
                    <a v-on:click="showNeedItems = !showNeedItems"><md-icon class="md-primary">expand_less</md-icon> Hide Needed Items</a>
                </div>
            </div>
        </div>
        <div class="row needitems-actions" v-show="!showNeedItems">
            <div class="col-lg-12">
                <a v-on:click="showNeedItems = !showNeedItems"><md-icon class="md-primary">expand_more</md-icon> Show Needed Items</a>
            </div>
        </div>
        <!--/NEEDED ITEMS-->
    </div>
</template>

<script>
export default {
    data() {
        return {
           showNeedItems: false
        }
    },
   
}
</script>