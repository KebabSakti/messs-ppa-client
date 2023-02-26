interface RoomModel {
  id?: string;
  locationId?: string;
  mess?: string;
  location?: string;
  picture?: string;
  name?: string;
  capacity?: number;
  user?: number;
  full?: boolean;
}

export { type RoomModel };
