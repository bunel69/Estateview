import { Bell, Check, Trash2, Mail, Calendar, CreditCard, Home } from "lucide-react";
import { useState } from "react";

interface Notification {
  id: number;
  type: "payment" | "appointment" | "property" | "general";
  title: string;
  message: string;
  date: string;
  read: boolean;
}

export function ClientNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "payment",
      title: "Payment Reminder",
      message: "Your monthly payment of ₱50,000 is due on March 30, 2026.",
      date: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "appointment",
      title: "Appointment Confirmed",
      message: "Your property visit is scheduled for March 20, 2026 at 10:00 AM.",
      date: "1 day ago",
      read: false,
    },
    {
      id: 3,
      type: "property",
      title: "Property Update",
      message: "Construction progress update for your Naomi - Lot 45 is now available.",
      date: "3 days ago",
      read: true,
    },
    {
      id: 4,
      type: "general",
      title: "Welcome to EstateView",
      message: "Thank you for choosing Manhattan Residences Candelaria. We're excited to help you find your dream home!",
      date: "1 week ago",
      read: true,
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "payment":
        return <CreditCard className="h-5 w-5" />;
      case "appointment":
        return <Calendar className="h-5 w-5" />;
      case "property":
        return <Home className="h-5 w-5" />;
      default:
        return <Mail className="h-5 w-5" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-8">
          <h1 className="text-4xl font-light text-gray-900 mb-3">Notifications</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              {unreadCount > 0 ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
            </p>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
              >
                <Check className="h-4 w-4" />
                Mark all as read
              </button>
            )}
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white rounded-xl p-6 shadow-sm border transition-all ${
                  notification.read ? 'border-gray-100' : 'border-blue-200 bg-blue-50/30'
                }`}
              >
                <div className="flex gap-4">
                  <div className={`flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center ${
                    notification.type === 'payment' ? 'bg-green-100 text-green-600' :
                    notification.type === 'appointment' ? 'bg-blue-100 text-blue-600' :
                    notification.type === 'property' ? 'bg-purple-100 text-purple-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {getIcon(notification.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-medium text-gray-900">{notification.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      </div>
                      {!notification.read && (
                        <div className="h-2 w-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 mt-4">
                      <span className="text-xs text-gray-500">{notification.date}</span>
                      <div className="flex gap-2">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Mark as read
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="text-xs text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                        >
                          <Trash2 className="h-3 w-3" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-medium text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-500 text-sm">You're all caught up! Check back later for updates.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
