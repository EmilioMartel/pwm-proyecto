

export interface Chat {
  id:      string;
  members: string[];
  data:    Datum[];
}

export interface Datum {
  datetime: string;
  owner:    string;
  message:  string;
}

export interface Event {
  id:         string;
  userId:     string;
  name:       string;
  date:       string;
  start:      string;
  end:        string;
  ubication:  string;
  priority:   string;
  categories: string;
  addFriends: string[];
  notes:      string;
}

export interface Resource {
  id:       string;
  name:     string;
  date:     string;
  category: string;
}

export interface User {
  id:            string;
  name:          string;
  lastName?:     string;
  email:         string;
  password:      string;
  events:        string[];
  chats:         string[];
  friendList:    string[];
  friendRequest: string[];
}
