import {Meteor} from 'meteor/meteor';
import {LinksCollection} from '../api/Link'
Meteor.methods({
    NewLink(title){
        LinksCollection.insert({
            title : title.trim()
        })
    },
    //New method created to fetch links
    FindLinks(){
        return LinksCollection.find({}).fetch();
    }
});
