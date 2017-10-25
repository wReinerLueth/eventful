import Ember from 'ember';

export default Ember.Component.extend({
    click(){
        // this.toggleProperty('favorited');
        let favoritedToggled = !this.get('favorited'); // '!' is the opposite of whatever is after
        this.get('whenThisThingIsClicked')(favoritedToggled);
    }
});
