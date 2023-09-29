using System.Text.Json.Serialization;
using System.Text.Json;

namespace Invelop.Api.Converters;

public class JsonDateTimeConverter : JsonConverter<DateTime?>
{
    public override DateTime? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        var inputString = reader.GetString();
        if (string.IsNullOrWhiteSpace(inputString))
        {
            return null;
        }

        return DateTime.Parse(inputString);
    }

    public override void Write(Utf8JsonWriter writer, DateTime? value, JsonSerializerOptions options)
    {
        writer.WriteStringValue(value?.ToUniversalTime().ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ssZ"));
    }
}