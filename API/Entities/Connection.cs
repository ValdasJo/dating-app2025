using System;

namespace API.Entities;

public class Connection(string connectionId, string userId)
{
    public string connectionId { get; set; } = connectionId;
    public string userId { get; set; } = userId;

    // nav property
    public Group Group { get; set; } = null!;
}
