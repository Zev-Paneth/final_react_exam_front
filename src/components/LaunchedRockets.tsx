import { Clock, XCircle, Shield } from 'lucide-react';



const LaunchedRockets = () => {
    const rockets: LaunchedRocket[] = [
        { name: 'Grad', timeToHit: '2-42m', status: 'Launched' },
        { name: 'Grad', timeToHit: '0m', status: 'Hit' },
        { name: 'Kasam', timeToHit: '0m', status: 'Intercepted' }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Launched':
                return <Clock className="w-4 h-4 text-yellow-500" />;
            case 'Hit':
                return <XCircle className="w-4 h-4 text-red-500" />;
            case 'Intercepted':
                return <Shield className="w-4 h-4 text-green-500" />;
            default:
                return null;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Launched':
                return 'text-yellow-500';
            case 'Hit':
                return 'text-red-500';
            case 'Intercepted':
                return 'text-green-500';
            default:
                return '';
        }
    };

    return (
        <section className="launched-rockets mt-6 bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4">Launched Rockets</h3>

            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                    <tr className="border-b">
                        <th className="text-left py-2 px-4">Rocket</th>
                        <th className="text-left py-2 px-4">Time to Hit</th>
                        <th className="text-left py-2 px-4">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rockets.map((rocket, index) => (
                        <tr key={index} className="border-b last:border-b-0">
                            <td className="py-2 px-4">{rocket.name}</td>
                            <td className="py-2 px-4">{rocket.timeToHit}</td>
                            <td className="py-2 px-4">
                                <div className="flex items-center gap-2">
                                    {getStatusIcon(rocket.status)}
                                    <span className={getStatusColor(rocket.status)}>
                      {rocket.status}
                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default LaunchedRockets;