use std::ptr::NonNull;

pub fn find_itinerary(tickets: Vec<Vec<String>>) -> Vec<String> {


    // Order Tickets by Second arg¿?
    // lastAirport = "JFK"
    // While elements in tickets:
    //      get ticketIndex with lastAirport using lower lexical order
    //      lastAirport = tickets[ticketIndex].1
    //      remove tickets[ticketIndex]
    //      push lastAirport to resultArray

    let mut lastAirport = String::from("JFK");
    while tickets.len() > 0 {
        let mut idx = 0;
        while lastAirport != {

        }
    }
    vec![String::from("JFK"), String::from("MUC"), String::from("LHR")]
}