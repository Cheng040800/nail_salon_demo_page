const FIREBASE_API_KEY = "AIzaSyCP863cInQcH4mzerxqb5hjjPEukzDt3ds";
const PROJECT_ID = "booking-system-ef265";

export interface BookingData {
  id: string;
  clientName: string;
  email: string;
  service: string;
  date: string;
  time: string;
  phone: string;
  notes: string;
  status: string;
  initials: string;
}

export const signIn = async (email: string, password: string) => {
  const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || 'Authentication failed');
  }

  return response.json();
};

export const createBooking = async (booking: Omit<BookingData, 'id' | 'initials' | 'email'>) => {
  const response = await fetch(`https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        name: { stringValue: booking.clientName },
        phone: { stringValue: booking.phone },
        service: { stringValue: booking.service },
        date: { stringValue: booking.date },
        time: { stringValue: booking.time },
        notes: { stringValue: booking.notes },
        status: { stringValue: 'Pending' },
        createdAt: { timestampValue: new Date().toISOString() }
      }
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Failed to create booking');
  }

  return response.json();
};

export const updateBookingStatus = async (id: string, status: string, token: string) => {
  const response = await fetch(`https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/bookings/${id}?updateMask.fieldPaths=status`, {
    method: 'PATCH',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      fields: {
        status: { stringValue: status }
      }
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Failed to update booking status');
  }

  return response.json();
};

export const deleteBooking = async (id: string, token: string) => {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/bookings/${id}`;
  
  const response = await fetch(url, {
    method: 'DELETE',
    headers: { 
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    let errorMessage = `Error ${response.status}: Failed to delete booking`;
    try {
      const errorData = await response.json();
      errorMessage = errorData.error?.message || errorMessage;
    } catch (e) {
      // If response is not JSON
      const text = await response.text();
      errorMessage = text || errorMessage;
    }
    throw new Error(errorMessage);
  }

  return true;
};

export const fetchBookings = async (token: string): Promise<BookingData[]> => {
  const response = await fetch(`https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/bookings`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch bookings');
  }

  const data = await response.json();
  
  // Transform Firestore REST format to our local format
  return (data.documents || []).map((doc: any) => {
    const fields = doc.fields;
    const name = fields.name?.stringValue || fields.clientName?.stringValue || 'Unknown';
    return {
      id: doc.name.split('/').pop(),
      clientName: name,
      email: fields.email?.stringValue || '',
      service: fields.service?.stringValue || 'Nail Treatment',
      date: fields.date?.stringValue || '',
      time: fields.time?.stringValue || '',
      phone: fields.phone?.stringValue || '',
      notes: fields.notes?.stringValue || '—',
      status: fields.status?.stringValue || 'Pending',
      initials: name.split(' ').map((n: string) => n[0]).filter(Boolean).join('').toUpperCase()
    };
  });
};
