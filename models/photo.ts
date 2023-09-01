export interface Response {
    photos: Photo[];
  }
  
  export interface Photo {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
  }
  
  interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    cameras: Camera2[];
  }
  
  interface Camera2 {
    name: string;
    full_name: string;
  }
  
  interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  }
  