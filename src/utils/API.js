import axios from "axios";

export default {
  getClasses: function() {
    return axios.get("http://stark-shelf-47124.herokuapp.com/api/classes");
  },

  createClass: function(ClassData) {
    return axios.post(
      "http://stark-shelf-47124.herokuapp.com/api/classes",
      ClassData
    );
  },
  getActiveClasses: function(id) {
    console.log("from api util", id);
    return axios.get(
      `http://stark-shelf-47124.herokuapp.com/api/classes/active/${id}`
    );
  },
  createLead: function(data) {
    return axios.post(
      "http://stark-shelf-47124.herokuapp.com/api/leads/createLead",
      data
    );
  },

  getLeads: function() {
    return axios.get("http://stark-shelf-47124.herokuapp.com/api/leads/");
  },

  getOneLead: async function(id) {
    const lead = axios.get(
      `http://stark-shelf-47124.herokuapp.com/api/leads/${id}`
    );
    return await lead;
  },

  getOneParent: function(id) {
    return axios.get(
      `http://stark-shelf-47124.herokuapp.com/api/parents/${id}`
    );
  },

  sendSms: async function(messageData) {
    const res = axios.post(
      "http://stark-shelf-47124.herokuapp.com/api/sms/out",
      messageData
    );
    return await res;
  },

  call: function(leadParent) {
    let data = {
      leadParent: leadParent
    };
    return axios.post(
      "http://stark-shelf-47124.herokuapp.com/api/calls/call",
      data
    );
  },

  writeNote: async function(note) {
    let data = {
      id: note.id,
      body: note.body
    };

    const res = axios.post(
      "http://stark-shelf-47124.herokuapp.com/api/parents/writeNote",
      data
    );
    return await res;
  },

  updateLeadStatus: function(data, id) {
    return axios.put(
      `http://stark-shelf-47124.herokuapp.com/api/leads/updateStatus/${id}`,
      data
    );
  },
  updateClassStatus: function(data, id) {
    return axios.put(
      `http://stark-shelf-47124.herokuapp.com/api/classes/updateStatus/${id}`,
      data
    );
  },
  deleteParent: async function(id) {
    const res = axios.delete(
      `http://stark-shelf-47124.herokuapp.com/api/parents/${id}`
    );
    return await res;
  }
};
