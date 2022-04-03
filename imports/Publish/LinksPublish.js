import { Meteor } from "meteor/meteor";
import {LinksCollection}  from "../api/Link";

Meteor.publish('AllLinksPublish', function() {
    return LinksCollection.find({});
});
