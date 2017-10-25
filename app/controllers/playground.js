import Ember from 'ember';

export default Ember.Controller.extend({
    isFavorited: true,
    // don't do this
    // isFavoritedChange: Ember.observer('isFavorited', function(){
    //     console.log('changed');
    // })
    actions: {
        favoriteHeart(newIsFavorited) {
            this.set('isFavorited', newIsFavorited);
            console.log('clicking heart');
        }
    }
});
